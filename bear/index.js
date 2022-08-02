//https://github.com/NickCarducci/bear
export default {
    async fetch(request, context) {
        //const bearer = context.CF_API_Key;
        return fetch("https://sausage.saltbank.org/api", {
            //mastercard-backbank.backbank.workers.dev
            //origin: true,
            //cors: "origin",
            headers: {
                //Origin: "https://i7l8qe.csb.app",
                //"Access-Control-Request-Headers": ["Allow", "Origin"],
                //"Referrer-Policy": "cross-origin",
                //https://developers.cloudflare.com/firewall/api/cf-firewall-rules/post/
                "X-Auth-Email": "nmcarducci@gmail.com",
                "X-Auth-Key": context.env.CF_API_KEY, // cloudflare pages>settings>environment_variables
                "Content-Type": "Application/JSON",
                "Access-Control-Request-Method": "POST"
            },
            method: "POST",
            body: JSON.stringify({
                pageOffset: "0",
                pageLength: "10",
                postalCode: "77777"
            }),
            maxAge: 3600
        })
        //return new Response("Hello World!");
    },
};
