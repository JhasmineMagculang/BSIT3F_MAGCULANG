<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Visibility & Cycle Color</title>
</head>
<body>
    <!-- Toggle Paragraph Visibility Section -->
    <h2>Toggle Paragraph Visibility</h2>
    <p id="paragraph">This paragraph can be toggled.</p>
    <button onclick="toggleVisibility()">Toggle Paragraph</button>

    <!-- Cycle Text Color Section -->
    <h2>Cycle Text Color</h2>
    <p id="colorText">This text will change color each time you click the button.</p>
    <button onclick="cycleColor()">Cycle Color</button>

    <script>
        // Functionality to toggle the visibility of the paragraph
        function toggleVisibility() {
            const paragraph = document.getElementById("paragraph");
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        }

        // Functionality to cycle the text color
        const colors = ["red", "black", "green", "blue"];
        let colorIndex = 0;

        function cycleColor() {
            const text = document.getElementById("colorText");
            text.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; // Loop back to the start
        }
    </script>
</body>
</html>