import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.css';
import 'jsvectormap/dist/maps/world.js';

let mapInstance = null;
let resizeTimeout = null;
let resizeHandler = null;

function getMarkerSize() {
    const width = window.innerWidth;
    if (width < 576) return 8;
    if (width < 992) return 12;
    return 15;
}

function fixSvgScaling() {
    const container = document.getElementById('world-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const bbox = svg.getBBox();

    svg.removeAttribute('width');
    svg.removeAttribute('height');

    if (bbox.width && bbox.height) {
        svg.setAttribute(
            'viewBox',
            `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
        );
    } else {
        svg.setAttribute('viewBox', '0 0 1000 600');
    }

    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.display = 'block';
}

function createMap() {
    const container = document.getElementById('world-map');
    if (!container) return;


    if (mapInstance) {
        mapInstance.destroy();
        mapInstance = null;
    }

    container.innerHTML = '';

    const markerSize = getMarkerSize();

    mapInstance = new jsVectorMap({
        selector: '#world-map',
        map: 'world',
        backgroundColor: 'transparent',
        zoomButtons: false,
        zoomOnScroll: true,

        regionStyle: {
            initial: {
                fill: '#afb3bb',
                stroke: '#fff',
                strokeWidth: 2.5,
            },
            hover: {
                fill: '#656b75',
            },
        },

        markers: [{ coords: [-22.87, 136.21], name: 'Yogja, INA' }],

        markerStyle: {
            initial: {
                fill: '#1463ff',
                stroke: '#ffffff',
                r: 4,
            },
        },
    });

    setTimeout(fixSvgScaling, 100);
    setTimeout(fixSvgScaling, 300);
}

export function initMap() {
    // Если карта уже была инициализирована — не создаём слушатель заново
    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
    }

    createMap();

    resizeHandler = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            createMap();
        }, 300);
    };

    window.addEventListener('resize', resizeHandler);
}

export function destroyMap() {
    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
        resizeHandler = null;
    }
    if (mapInstance) {
        mapInstance.destroy();
        mapInstance = null;
    }
}