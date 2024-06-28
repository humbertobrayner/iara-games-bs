document.addEventListener('DOMContentLoaded', () => {
    const priceold = document.getElementById('priceold1');
    const pricenew = document.getElementById('pricenew1');
    const selectElement = document.getElementById('currency-select');

    async function fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }

    selectElement.addEventListener('change', async () => {
        const selectedValue = selectElement.value;


        const data = await fetchData("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
        if (data) {
            console.log(data);

            if (selectedValue === 'dolar') {
                const pricenewF = parseFloat(data.USDBRL.high);
                const priceoldF = parseFloat(data.USDBRL.high);
                pricenew.innerHTML = `$ ${pricenewF.toFixed(2)}`;
                priceold.innerHTML = `$ ${priceoldF.toFixed(2)}`;
            } else if (selectedValue === 'eur') {
                const pricenewF = parseFloat(data.EURBRL.high);
                const priceoldF = parseFloat(data.EURBRL.high);
                pricenew.innerHTML = `EU$ ${pricenewF.toFixed(2)}`;
                priceold.innerHTML = `EU$ ${priceoldF.toFixed(2)}`;
            }
            else {
                selectedValue === 'real'
                pricenew.innerHTML = `R$ 25,90`;
                priceold.innerHTML = `R$ 49,90`;
            }
        } 
    });

    selectElement.dispatchEvent(new Event('change'));
});