function json2Table(json) {
    let cols = Object.keys(json[0]);


    //Map over columns, make headers,join into string
    let headerRow = cols
        .map(col => `<th>${col}</th>`)
        .join("");

    let rows = json.map(row => {
        let tds = cols.map(col => {
            if (row[col] == "")
                return `<td>❎</td>`;
            else if (!row[col].includes('http'))
                return `<td>${row[col]}</td>`;
            else
                return `<td><a href="${row[col]}">✅</a></td>`;
        }).join("");
        return `<tr>${tds}</tr>`;
    }).join("");

    //build the table
    const table = `
        <table style="margin-left: auto; margin-right: auto;">
            <thead>
                <tr>${headerRow}</tr>
            <thead>
            <tbody>
                ${rows}
            <tbody>
        <table>`;

    return table;
}