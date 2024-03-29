function editName(button) {
            var row = button.parentNode.parentNode;
            var datum = row.cells[2].innerText;
            var uhrzeit = row.cells[3].innerText;
            var vorNachname= row.cells[4].innerText;
            var abholort=row.cells[5].innerText;
            var zielort=row.cells[6].innerText;
            var notizen=row.cells[9].innerText;
            // AJAX-Request
            var xhr5 = new XMLHttpRequest();
            xhr5.open('POST', 'anzeigenbearbeiten.php', true);
            xhr5.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr5.onreadystatechange = function() {
                if (xhr5.readyState === 4 && xhr5.status === 200) {
                    // Hier können Sie die Antwort des PHP-Skripts verarbeiten, falls erforderlich
                    console.log(xhr5.responseText);
                }
            };
            var data = 'datum=' + encodeURIComponent(datum) + '&uhrzeit=' + encodeURIComponent(uhrzeit) + '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen);
            xhr5.send(data);
        }
