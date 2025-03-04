document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resume-form");
    const preview = document.getElementById("resume-preview");
    const themeSelector = document.getElementById("theme");
    const fontSelector = document.getElementById("font");
    const colorPicker = document.getElementById("color");

    // Function to update preview dynamically
    function updatePreview() {
        document.getElementById("preview-name").innerText = document.getElementById("name").value || "Your Name";
        document.getElementById("preview-email").innerText = document.getElementById("email").value || "your.email@example.com";
        document.getElementById("preview-phone").innerText = document.getElementById("phone").value || "123-456-7890";
        document.getElementById("preview-summary").innerText = document.getElementById("summary").value || "Write a short summary about yourself.";
    }

    // Theme Change
    themeSelector.addEventListener("change", function () {
        preview.className = "";
        preview.classList.add(themeSelector.value);
    });

    // Font Change
    fontSelector.addEventListener("change", function () {
        preview.style.fontFamily = fontSelector.value;
    });

    // Color Change
    colorPicker.addEventListener("input", function () {
        preview.style.color = colorPicker.value;
    });

    // Live preview updates
    form.addEventListener("input", updatePreview);

    // PDF Download Functionality
    document.getElementById("download-pdf").addEventListener("click", function () {
        const element = document.getElementById("resume-preview");
        
        html2pdf()
            .from(element)
            .set({
                margin: 10,
                filename: "Resume.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            })
            .save();
    });
});
