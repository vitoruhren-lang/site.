 <script>
        function switchTab(tabId) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));

            // Deactivate all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));

            // Show current tab
            const targetTab = document.getElementById(tabId);
            if(targetTab) {
                targetTab.classList.add('active');
            }

            // Highlight corresponding nav link
            navLinks.forEach(link => {
                if(link.getAttribute('onclick') && link.getAttribute('onclick').includes(tabId)) {
                    link.classList.add('active');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close mobile menu if open
            document.getElementById('sidebar').classList.remove('open');
        }

        // Mobile Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });
    </script>
</body>
</html>