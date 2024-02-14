/** @odoo-module **/

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add('css_error_tour', {
    test: true,
    url: '/web',
    steps: () => [
    {
        content: "Error message",
<<<<<<< HEAD
        trigger: ".o_notification.border-danger",
=======
        trigger: ".o_notification:has(.o_notification_bar.bg-danger)",
>>>>>>> baab6d0d503ebac532bda998fd1591eaff7ef9c5
        run: () => {
            const title = document.body.querySelector(".o_notification .o_notification_title").innerText;
            if (!title.includes("Style error")) {
                throw new Error("should contain a Style error notification");
            }
        },
    },
]});


registry.category("web_tour.tours").add('css_error_tour_frontend', {
    test: true,
    url: '/',
    steps: () => [
    {
        content: "Error message",
<<<<<<< HEAD
        trigger: ".o_notification.border-danger",
=======
        trigger: ".o_notification:has(.o_notification_bar.bg-danger)",
>>>>>>> baab6d0d503ebac532bda998fd1591eaff7ef9c5
        run: () => {
            const title = document.body.querySelector(".o_notification .o_notification_title").innerText;
            if (!title.includes("Style error")) {
                throw new Error("should contain a Style error notification");
            }
        },
    },
]});
