const SUPABASE_URL = "https://qsjcwauaaxkdpbqdsurl.supabase.co";

// IMPORTANTE:
// Pegá aquí SOLO tu Publishable Key de Supabase.
// Nunca pongas aquí una Secret Key / service_role key.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_aAeK8ysVyWiKgmjg9b62mA_4Wl0yZer";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const form = document.getElementById("register-form");
const button = document.getElementById("register-button");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  message.textContent = "";
  button.disabled = true;

  try {
    const firstName = document
      .getElementById("first_name")
      .value
      .trim();

    const lastName = document
      .getElementById("last_name")
      .value
      .trim();

    const username = document
      .getElementById("username")
      .value
      .trim();

    const country = document
      .getElementById("country")
      .value
      .trim();

    const email = document
      .getElementById("email")
      .value
      .trim();

    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    if (password.length < 8) {
      throw new Error("Password must contain at least 8 characters.");
    }

    if (username.length < 3) {
      throw new Error("Username must contain at least 3 characters.");
    }

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,

      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          username,
          country_of_residence: country
        }
      }
    });

    if (error) {
      throw error;
    }

    /*
      Because Confirm Email is enabled in Supabase,
      the user normally will not receive an authenticated
      session until the email is confirmed.
    */

    if (data.user) {
      message.textContent =
        "Account created successfully. Please check your email and confirm your address to continue.";

      form.reset();
    } else {
      message.textContent =
        "Please check your email to continue.";
    }

  } catch (error) {
    console.error(error);

    message.textContent =
      error?.message ||
      "Something went wrong. Please try again.";
  } finally {
    button.disabled = false;
  }
});
