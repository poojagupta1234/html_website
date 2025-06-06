
            document.addEventListener('DOMContentLoaded', () => {
                document.querySelector("#billing-checkbox").addEventListener("change", toggleBilling)
            }, false)

            function toggleBilling(){
             
                const billingItems =document.querySelectorAll("#billing input[type='text']");

                for (const element of billingItems) {
                    console.log("element", element);
                    element.disabled = !element.disabled;
                }
            }
            
       