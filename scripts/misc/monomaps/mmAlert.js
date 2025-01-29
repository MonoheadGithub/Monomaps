// mmAlert options.
//
// {
//   type: string, // info, success, error, warning, default*
//   name: string,
//   message: string,
//   ui: boolen, // displays notification on the top-right.
//   dialog: boolen, // If this is set to true, this override the UI option to true as its required.
//   timeOut: int, // miliseconds of how long the notification should display for.
//   onclick: string // overrides the dismiss function with a custion onclick function.
// };

/**
 * Console logs a mmAlert to the console.
 *
 * @params options
 * @returns If using the dialog option, returns a promise.
 */

 function mmAlert(options) {
  var color;

  switch (options.type) {
    case "info":
      color = "#36baa9";
      break;

    case "success":
      color = "#36ba4c";
      break;

    case "error":
      color = "#ba4a36";
      break;

    case "warning":
      color = "#a89e32";
      break;

    case "default":
      color = "#918e8d";
      break;

    default:
      color = "#918e8d";
      break;
  }

  if (options.dialog) {
    options.ui = true;
  }

  if (options.ui) {
    let notification = document.createElement("div");
    let backdrop = document.createElement("div");
    backdrop.classList.add(
      "monomaps-maps-notification-alert-background",
      "fadein"
    );

    notification.classList.add(
      "monomaps-maps-notification",
      "fadein",
      options.type
    );
    if (options.dialog) {
      notification.classList.remove("monomaps-maps-notification");
      notification.classList.add("monomaps-maps-notification-alert");
      notification.innerHTML = `
      <b class="monomaps-maps-notification-title">${options.name}</b>
      <p class="monomaps-maps-notification-message">${options.message}</p>
      <br>
      ${options.hideYesButton ? '' : `<a href="#" class='monomaps-maps-button-rounded' id='alertYes'>${options.yesButtonText ? options.yesButtonText : "Yes"}</a>      `}
      <a href="#" class='monomaps-maps-button-rounded' id='alertNo'>${options.noButtonText ? options.noButtonText : "No"}</a>
      `;
    } else {
      if (options.backdrop) {
        notification.classList.remove("monomaps-maps-notification");
        notification.classList.add("monomaps-maps-notification-alert");
      }
      notification.innerHTML = `
      <b class="monomaps-maps-notification-title">${options.name}</b>
      <p class="monomaps-maps-notification-message">${options.message}</p>
      `;
    }

    let expiration;
    let timeout;

    if (options.timeOut) {
      timeout = options.timeOut;
    } else {
      timeout = 5000;
    }

    if (options.id) {
      notification.id = options.id;
    }

    document.getElementById("monomaps-maps-alert").appendChild(notification);
    if (options.dialog || options.backdrop) {
      document.getElementById("monomaps-maps-container").appendChild(backdrop);
    }
    if (!options.dialog && !options.backdrop) {
      expiration = setTimeout(() => {
        notification.classList.add("fadeout");
        setTimeout(() => {
          notification.remove();
        }, 250);
      }, timeout);
    }

    if (options.onclick) {
      notification.addEventListener("click", options.onclick);
    }else{
      notification.addEventListener("click", (e) => {
        if (!options.dialog) {
          if (!options.backdrop) {
            clearTimeout(expiration);
            notification.classList.add("fadeout");
            setTimeout(() => {
              notification.remove();
              if (options.backdrop) {
                backdrop.remove();
              }
            }, 500);
          }
        }
      });
    }

    if (options.dialog) {
      return new Promise(function (resolve, reject) {
        if(document.getElementById("alertYes")){
          document.getElementById("alertYes").addEventListener("click", (e) => {
            notification.remove();
            backdrop.remove();
            resolve(true);
            return true;
          });
        }

        document.getElementById("alertNo").addEventListener("click", (e) => {
          notification.classList.add("fadeout");
          backdrop.classList.add("fadeout");
          setTimeout(() => {
            notification.remove();
            backdrop.remove();
          }, 500);
          resolve(false);
          return false;
        });
      });
    }
  }

  console.log(`%c[${options.name}]`, `color: ${color}`, options.message);
}
