/*!
 * notify.js
 *
 * Purpose: Provides custom functions for Toastify.js to make it simplier. 
 * 
 * Dependents: toastify-js
 *
 * Developed for Monomaps via Leaflet
 * Created by Jet0751
 * Version: 1.0.0
 */

function mNotify(ttext, ttype = 'log') {
    // Define the style for each type
    const styles = {
        success: {
            background: "green",
            color: "white"
        },
        info: {
            background: "blue",
            color: "white"
        },
        warning: {
            background: "orange",
            color: "black"
        },
        danger: {
            background: "red",
            color: "white"
        },
        log: {
            background: "white",
            color: "black"
        }
    };

    // Get the style based on type, or fallback to default
    const style = styles[ttype] || styles.default;

    // Log the notification text with custom color
    console.log(`%c[${ttype}]%c ${ttext}`, `background: ${style.background}; color: ${style.color};`, 'color: inherit;');

    // Create the Toastify notification
    Toastify({
        text: ttext,
        duration: 3000,
        close: true,
        style: style
    }).showToast();

    
}
