var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'JsonFile.json', true);

xhr.onload = function() {
    var data = xhr.response;
    const tbody = document.querySelector("tbody");
    for (let xhr of data) {
        let ul = document.createElement('ul');
        for (const x of xhr.festivals) {
            let li = document.createElement('li');
            li.append(x)
            ul.append(li);
        }
        let ListOfNames = document.createElement('ul');
        let ListOfNationalities = document.createElement('ul');

        for(let y in xhr.acteurs)
            {
                let ActorName = document.createElement("li");
                ActorName.append(`${xhr.acteurs[y].prénom} ${xhr.acteurs[y].nom}` )
                ListOfNames.append(ActorName);
                let Nationality = document.createElement("li")
                Nationality.append(`${xhr.acteurs[y].nationnalité}`)
                ListOfNationalities.append(Nationality)
            }
        tbody.innerHTML += `
        <tr>
            <td> ${xhr.titre} </td>
            <td> <img src='${xhr.poster}' width=120px></td>
            <td class="align-middle">${xhr.realisateur}</td>
            <td class="align-middle text-center">${xhr.duree}</td>
            <td class="align-middle text-center">${xhr.production}</td>
            <td class="align-middle">${ul.innerHTML}</td>
            <td class="align-middle">${ListOfNames.innerHTML}</td>
            <td>${ListOfNationalities.innerHTML}</td>
        </tr>
    `;
    }
};

xhr.send();

function Search()
    {
        var input, table, tr, td, SearchValue, TxtValue, i
            input = document.getElementById("search");
            SearchValue = input.value.toUpperCase();
            table = document.getElementById("table"); 
            tr = table.getElementsByTagName("tr");

        for(i = 1; i <= tr.length - 1; i++)
            {
                td = tr[i].getElementsByTagName("td")[0];
                if(td)
                    {
                        TxtValue = td.innerText;
                        if(TxtValue.toUpperCase().indexOf(SearchValue) > - 1)
                            {
                                tr[i].style.display = ""
                            }
                            else
                                {
                                    tr[i].style.display = "none"
                                }

                    }
                
            }
    }


function TitleSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[0];
                        y = rows[i + 1].getElementsByTagName("TD")[0];

                        if(x.innerHTML.toLowerCase() <  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function AscendantTitleSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[0];
                        y = rows[i + 1].getElementsByTagName("TD")[0];

                        if(x.innerHTML.toLowerCase() >  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function AscendantDirectorSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[2];
                        y = rows[i + 1].getElementsByTagName("TD")[2];

                        if(x.innerHTML.toLowerCase() >  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function DirectorSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[2];
                        y = rows[i + 1].getElementsByTagName("TD")[2];

                        if(x.innerHTML.toLowerCase() <  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function DurationSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[3];
                        y = rows[i + 1].getElementsByTagName("TD")[3];

                        if(x.innerHTML.toLowerCase() <  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function AscendantDurationSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[3];
                        y = rows[i + 1].getElementsByTagName("TD")[3];

                        if(x.innerHTML.toLowerCase() >  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function AscendantProductionSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[4];
                        y = rows[i + 1].getElementsByTagName("TD")[4];

                        if(x.innerHTML.toLowerCase() >  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }

    function ProductionSort()
    {
        var table, rows, i, x, y, switching, shouldswitch;

        table = document.getElementById("table");
        switching = true;

        while(switching)
            {
                switching = false;
                rows = table.rows;

                for(i = 1; i < (rows.length - 1); i++)
                    {
                        shouldswitch = false;
                        x = rows[i].getElementsByTagName("TD")[4];
                        y = rows[i + 1].getElementsByTagName("TD")[4];

                        if(x.innerHTML.toLowerCase() <  y.innerHTML.toLowerCase())
                            {
                                shouldswitch = true;
                                break;
                            }
                    }
                if(shouldswitch)
                    {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
    }