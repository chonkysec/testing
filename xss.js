var req1 = new XMLHttpRequest();
req1.onload = function() {
    if (req1.status === 200) { // Check if req1 was successful
        console.log("Request 1 Response:", req1.responseText);

        // Execute req2
        var req2 = new XMLHttpRequest();
        req2.onload = function() {
            console.log("Request 2 Response:", req2.responseText);
        };
        req2.open('post', 'https://user-management-api.brevo.com/user/invitation/send', true);
        req2.setRequestHeader('Content-Type', 'application/json');
        req2.withCredentials = true;
        req2.send(JSON.stringify({
            "all_resources_access": true,
            "emails": ["nnhhaapoc+100@gmail.com"],
            "role_id": null,
            "privileges": {
                "general": [
                    { "resource": "contact", "actions": ["view", "crud", "import", "export", "list", "form"] },
                    { "resource": "companies", "actions": ["crud", "manage", "settings"] },
                    { "resource": "organization_members", "actions": ["any"] },
                    { "resource": "sender_ip_domain", "actions": ["sender_mgmt", "domain_mgmt", "ip_mgmt"] },
                    { "resource": "my_plan", "actions": ["any"] },
                    { "resource": "smtp_api", "actions": ["smtp", "api_keys", "authorized_ips"] }
                ],
                "marketing": [],
                "transactional": [
                    { "resource": "transactional_emails", "actions": ["settings", "logs"] }
                ],
                "chat": [
                    { "resource": "chat", "actions": ["access", "configure"] }
                ],
                "crm": [
                    { "resource": "crm", "actions": ["crud", "delete_deals", "manage", "reports", "settings"] }
                ],
                "phone": [
                    { "resource": "phone", "actions": ["any"] }
                ]
            }
        }));
    } else {
        console.error("Request 1 failed with status:", req1.status);
    }
};
req1.open('post', 'https://billing-v2.brevo.com/billing/api/v2/one-click/purchase/items', true);
req1.setRequestHeader('Content-Type', 'application/json');
req1.withCredentials = true;
req1.send(JSON.stringify({
    "subscription_items": [
        { "id": "phone-seat-usd-monthly", "quantity": 1, "vertical": "phone" },
        { "id": "chat-seat-usd-monthly", "quantity": 1, "vertical": "chat" },
        { "id": "crm-seat-usd-annual", "quantity": 1, "vertical": "crm" }
    ]
}));
