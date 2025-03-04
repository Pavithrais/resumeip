document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme");
    const fontSelector = document.getElementById("font");
    const colorPicker = document.getElementById("color");
    const resume = document.getElementById("resume");

    // Theme Change
    themeSelector.addEventListener("change", function () {
        resume.className = "resume-container " + themeSelector.value;
    });

    // Font Change
    fontSelector.addEventListener("change", function () {
        resume.style.fontFamily = fontSelector.value;
    });

    // Text Color Change
    colorPicker.addEventListener("input", function () {
        resume.style.color = colorPicker.value;
    });

    // PDF Download
    document.getElementById("download-pdf").addEventListener("click", function () {
        html2canvas(resume, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jspdf.jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
            pdf.save("Resume.pdf");
        });
    });
});
