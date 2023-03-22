//this component will contain the preloader of the page

const Preloader = () => {
    return (
        <div id="js-preloader" class="js-preloader">
            <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
    );
    };

export default Preloader;