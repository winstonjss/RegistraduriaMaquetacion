let displayData = () => {

    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('myTable');
        let prod = result.products;
        for (let i = 0; i < prod.length; i++) {
            rows += `<tr><td><img src="${prod[i].thumbnail}" width="200px" height="150px" alt="img"/></td>
                    <td>${prod[i].title}</td>
                    <td>${prod[i].brand}</td>
                    <td>${prod[i].category}</td>
                    <td>${prod[i].description}</td>
                    <td>${prod[i].price}</td></tr>`

            tbody.innerHTML = rows;
        }
    })
}



displayData();