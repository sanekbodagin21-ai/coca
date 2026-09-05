export const copyLink = () => {
    const button = document.getElementById('copyLinkButton');
    if (!button) return;

    const originalHTML = button.innerHTML;
    let timeoutIds = [];

    const clearTimers = () => {
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
    };

    const animateState = ({ opacity, translateY, background, color, boxShadow }) => {
        button.style.transition = 'all 0.3s ease';
        button.style.opacity = opacity;
        button.style.transform = `translateY(${translateY}px)`;
        if (background !== undefined) button.style.background = background;
        if (color !== undefined) button.style.color = color;
        if (boxShadow !== undefined) button.style.boxShadow = boxShadow;
    };

    button.addEventListener('click', function () {
        if (!navigator.clipboard) {
            alert('Clipboard API is not supported in this browser.');
            return;
        }

        const currentUrl = window.location.href;
        clearTimers();

        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                animateState({ opacity: '0.6', translateY: -2 });

                timeoutIds.push(
                    setTimeout(() => {
                        button.innerHTML = 'Copied!';
                        animateState({
                            opacity: '1',
                            translateY: 0,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                        });
                    }, 300)
                );

                timeoutIds.push(
                    setTimeout(() => {
                        animateState({ opacity: '0.6', translateY: -2 });

                        timeoutIds.push(
                            setTimeout(() => {
                                button.innerHTML = originalHTML;
                                animateState({
                                    opacity: '1',
                                    translateY: 0,
                                    background: '',
                                    color: '',
                                    boxShadow: '',
                                });
                            }, 300)
                        );
                    }, 2500)
                );
            })
            .catch((err) => {
                alert('The link could not be copied. Error: ' + err);
            });
    });
};