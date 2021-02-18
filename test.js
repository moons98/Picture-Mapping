
function updateSize() {
    let nBytes = 0,
        oFiles = document.getElementById("uploadInput").files,
        nFiles = oFiles.length;
    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    let sOutput = nBytes + " bytes";
    // multiples approximation을 위한 선택적 코드
    for (let aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    // 선택적 코드의 끝
    document.getElementById("fileNum").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
  }


function fileLocation() {

}