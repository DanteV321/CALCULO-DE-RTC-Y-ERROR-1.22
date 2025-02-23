function calcular() {
    let multiplicador = parseFloat(document.getElementById('multiplicador').value);
    let ia1Primario = parseFloat(document.getElementById('ia1Primario').value);
    let ia1Secundario = parseFloat(document.getElementById('ia1Secundario').value);
    let ic1Primario = parseFloat(document.getElementById('ic1Primario').value);
    let ic1Secundario = parseFloat(document.getElementById('ic1Secundario').value);
    let ia2Primario = parseFloat(document.getElementById('ia2Primario').value);
    let ia2Secundario = parseFloat(document.getElementById('ia2Secundario').value);
    let ic2Primario = parseFloat(document.getElementById('ic2Primario').value);
    let ic2Secundario = parseFloat(document.getElementById('ic2Secundario').value);

    let rtcIa1 = (ia1Primario / ia1Secundario).toFixed(3);
    let errorIa1 = (((multiplicador / rtcIa1) - 1) * 100).toFixed(3);

    let rtcIc1 = (ic1Primario / ic1Secundario).toFixed(3);
    let errorIc1 = (((multiplicador / rtcIc1) - 1) * 100).toFixed(3);

    let rtcIa2 = (ia2Primario / ia2Secundario).toFixed(3);
    let errorIa2 = (((multiplicador / rtcIa2) - 1) * 100).toFixed(3);

    let rtcIc2 = (ic2Primario / ic2Secundario).toFixed(3);
    let errorIc2 = (((multiplicador / rtcIc2) - 1) * 100).toFixed(3);

    let errorProm1 = ((parseFloat(errorIa1) + parseFloat(errorIc1)) / 2).toFixed(3);
    let errorProm2 = ((parseFloat(errorIa2) + parseFloat(errorIc2)) / 2).toFixed(3);

    let resultadoFinal = ((parseFloat(errorProm1) + parseFloat(errorProm2)) / 2).toFixed(3);

    let multiplicadorEncontrado = ((parseFloat(rtcIa1) + parseFloat(rtcIa2) + parseFloat(rtcIc1) + parseFloat(rtcIc2)) / 4).toFixed(3);

    document.getElementById("resultado").innerHTML = `
        RTC Ia1: ${rtcIa1} <br>
        % ERROR Ia1: ${errorIa1}% <br>
        RTC Ic1: ${rtcIc1} <br>
        % ERROR Ic1: ${errorIc1}% <br>
        RTC Ia2: ${rtcIa2} <br>
        % ERROR Ia2: ${errorIa2}% <br>
        RTC Ic2: ${rtcIc2} <br>
        % ERROR Ic2: ${errorIc2}% <br>
        ERROR PROM 1: ${errorProm1}% <br>
        ERROR PROM 2: ${errorProm2}% <br>
        (E1+E2)/2: ${resultadoFinal}% <br>
        MULTIPLICADOR ENCONTRADO: ${multiplicadorEncontrado}
    `;
}

function limpiarCampos() {
    document.getElementById('multiplicador').value = "";
    document.getElementById('ia1Primario').value = "";
    document.getElementById('ia1Secundario').value = "";
    document.getElementById('ic1Primario').value = "";
    document.getElementById('ic1Secundario').value = "";
    document.getElementById('ia2Primario').value = "";
    document.getElementById('ia2Secundario').value = "";
    document.getElementById('ic2Primario').value = "";
    document.getElementById('ic2Secundario').value = "";
    document.getElementById("resultado").innerHTML = "";
}