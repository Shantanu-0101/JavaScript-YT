const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="color">
        <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keycode}</td>
            <td>${e.code}</td>
        </tr>
        
        </table>
        </div>
    `
})