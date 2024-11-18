   document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                document.querySelectorAll('.tab-content').forEach(section => {
                    section.style.display = 'none';
                });
                const target = document.querySelector(anchor.getAttribute('href'));
                target.style.display = 'block';
                e.preventDefault();
            });
        });

        // Show home tab by default
        document.querySelector('#home').style.display = 'block';