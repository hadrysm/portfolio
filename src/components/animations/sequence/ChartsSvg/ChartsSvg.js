import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

import { chartVariants } from 'animations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';
import { useSVGMorph } from 'hooks/useSVGMorph';

import { Wrapper } from './ChartsSvg.style';

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

const shapes = {
  one:
    'M610.463 389.987C596.578 401.498 576.819 406.262 557.711 409.27L554.495 409.761C534.536 412.735 514.356 414.319 494.107 415.282C483.272 415.807 472.438 416.177 461.604 416.508L453.113 416.758C442.088 417.085 431.043 417.406 419.977 417.721C409.142 418.029 398.308 418.318 387.473 418.588C373.598 418.926 359.722 419.207 345.846 419.431C335.012 419.602 324.177 419.72 313.343 419.784C299.464 419.864 285.588 419.837 271.716 419.705C260.874 419.594 250.04 419.404 239.213 419.135C225.329 418.778 211.454 418.255 197.586 417.568C188.173 417.108 178.766 416.555 169.365 415.909L165.082 415.607C124.727 412.701 83.6475 407.487 48.3329 391.007L47.3807 390.556C46.9074 390.334 46.4341 390.112 45.9608 389.878C39.4768 386.78 33.2658 383.141 27.394 379C16.953 371.557 8.33111 362.474 3.77495 351.698C-3.36437 334.796 0.410567 315.797 8.5649 299.271C16.7192 282.746 28.9621 267.827 39.5514 252.264C42.6534 247.705 45.5958 242.975 48.3329 238.126C65.4399 207.713 73.925 172.518 55.9912 143.211C53.624 139.474 51.068 135.86 48.3329 132.384C43.9593 126.685 39.5114 120.986 36.5063 114.678C29.4981 99.999 31.0036 83.49 33.5582 67.8076C36.9796 46.9566 43.2522 24.4986 62.8568 11.4718C83.197 -2.0566 112.068 -1.37278 137.312 3.49379C176.561 11.0102 212.788 26.7439 249.357 40.9333C285.926 55.1227 324.234 68.0983 364.442 69.4944C373.079 69.7898 381.726 69.4756 390.319 68.5541C401.774 67.3777 413.074 64.9997 424.031 61.4594C439.855 56.251 454.253 48.4155 464.928 37.5255C487.823 14.247 530.847 12.4861 561.868 26.5444C591.468 39.9588 610.611 68.349 609.197 96.705C607.589 128.269 583.936 154.22 562.261 180.838C559.632 184.064 557.038 187.301 554.512 190.56C553.101 192.38 551.718 194.203 550.36 196.031C547.982 199.256 545.684 202.499 543.518 205.781C532.444 222.609 524.614 242.821 532.238 260.988C536.515 271.16 544.675 278.922 554.512 285.697C576.551 300.873 606.973 311.084 620.659 332.329C632.451 350.638 628.083 375.353 610.463 389.987Z',
  two:
    'M273.043 3.20907C338.559 15.3774 348.072 80.4781 402.953 108.382C457.964 136.352 546.432 123.814 586.23 162.448C628.939 203.908 639.782 263.86 611.768 311.091C584.274 357.446 511.967 382.062 445.232 400.17C390.34 415.064 331.502 398.233 273.043 403C202.524 408.75 129.694 456.798 69.0995 430.84C9.55223 405.331 27.4491 340.83 15.3622 292.612C5.21697 252.14 -6.54296 212.971 4.36474 172.597C16.6272 127.208 32.3045 79.5106 81.2759 48.6366C132.722 16.2025 206.186 -9.20825 273.043 3.20907Z',
  three:
    'M318.862 0.0171021C380.548 0.891852 427.603 35.6093 478.292 60.8546C530.32 86.7669 595.724 106.024 617.436 148.72C639.371 191.856 622.017 241.715 590.605 281.718C562.427 317.603 500.959 328.234 456.219 354.035C408.057 381.809 380.579 440.477 318.862 438.428C256.518 436.358 230.207 379.733 190.438 345.211C161.547 320.133 144.448 291.891 119.014 264.952C79.5617 223.164 -7.99947 194.226 0.588899 144.126C8.804 96.2041 97.8905 82.0294 154.788 56.2671C207.336 32.4742 256.743 -0.863792 318.862 0.0171021Z',
};

const ChartsSvg = ({ size = '100%', ...props }) => {
  const [containerRef, wrapperControls, inView] = useObserverAnimation({ threshold: 0.1 }, false);

  const d = useSVGMorph(shapes, {
    ...transition,
  });

  const treeControls = useAnimation();
  const characterControls = useAnimation();
  const staggerRectangleControls = useAnimation();
  const staggerArrowleControls = useAnimation();

  useEffect(() => {
    wrapperControls.set('hiddenY');
    treeControls.set('hiddenY');
    characterControls.set('hiddenX');

    if (inView) {
      (async () => {
        await wrapperControls.start('visible');
        await treeControls.start('visible');
        staggerRectangleControls.start('visible');
        staggerArrowleControls.start('visible');
        await characterControls.start('visible');
      })();
    }
  }, [inView]);

  return (
    <Wrapper {...props}>
      <motion.div ref={containerRef} variants={chartVariants} animate={wrapperControls}>
        <svg
          role="img"
          width={size}
          height={size}
          viewBox="0 0 628 437"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="prefix__chart">
            <g id="prefix__bgc">
              <motion.path id="prefix__Vector" opacity={0.1} d={d} fill="currentColor" />
            </g>
            <g id="prefix__tree">
              <motion.g strokeDasharray="0 1" variants={chartVariants} animate={treeControls}>
                <path
                  id="prefix__Vector_2"
                  opacity={0.8}
                  d="M110.34 428.144c17.954 0 32.509-2.796 32.509-6.246 0-3.449-14.555-6.245-32.509-6.245s-32.509 2.796-32.509 6.245c0 3.45 14.555 6.246 32.509 6.246z"
                  fill="currentColor"
                />
                <path
                  id="prefix__Vector_3"
                  d="M109.798 424.195c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_4"
                  d="M109.798 418.143c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_5"
                  d="M109.798 412.091c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_6"
                  d="M109.798 406.039c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_7"
                  d="M109.798 399.988c2.092 0 3.787-2.218 3.787-4.952 0-2.735-1.695-4.953-3.787-4.953-2.091 0-3.786 2.218-3.786 4.953 0 2.734 1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_8"
                  d="M109.798 393.936c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_9"
                  d="M109.798 387.884c2.092 0 3.787-2.217 3.787-4.952s-1.695-4.952-3.787-4.952c-2.091 0-3.786 2.217-3.786 4.952s1.695 4.952 3.786 4.952z"
                  fill="#434149"
                />
                <path
                  id="prefix__Vector_10"
                  opacity={0.8}
                  d="M123.969 341.515c.516-.659.986-1.352 1.408-2.074l-9.945-1.636 10.755.086a18.179 18.179 0 00.348-14.361l-14.433 7.482 13.309-9.795a18.128 18.128 0 00-19.029-8.725 18.14 18.14 0 00-11.975 8.109 18.118 18.118 0 00-2.229 14.284 18.122 18.122 0 003.285 6.613 18.245 18.245 0 00-2.064 3.305l12.91 6.701-13.766-4.615a18.12 18.12 0 002.92 17.015 18.117 18.117 0 00-2.055 19.119 18.142 18.142 0 0032.62 0 18.115 18.115 0 00-2.055-19.119 18.124 18.124 0 00.001-22.406l-.005.017z"
                  fill="currentColor"
                />
                <path
                  id="prefix__Vector_11"
                  opacity={0.1}
                  d="M91.585 352.718a18.038 18.038 0 003.878 11.203 18.117 18.117 0 00-2.055 19.119 18.142 18.142 0 0032.62 0 18.115 18.115 0 00-2.055-19.119c2.425-3.083-32.388-13.237-32.388-11.203z"
                  fill="#434149"
                />
              </motion.g>
            </g>
            <g id="prefix__rectangles" fill="currentColor">
              <motion.g
                variants={chartVariants.stagger}
                initial="hidden"
                animate={staggerRectangleControls}
              >
                <motion.path
                  strokeDasharray="0 1"
                  variants={chartVariants.rectangle}
                  id="prefix__Vector_12"
                  d="M197.586 288.735v128.787c-9.413-.46-18.82-1.012-28.221-1.658l-4.283-.302V288.735a5.03 5.03 0 015.03-5.026h22.444a5.042 5.042 0 013.557 1.472 5.028 5.028 0 011.473 3.554z"
                />
                <motion.path
                  strokeDasharray="0 1"
                  variants={chartVariants.rectangle}
                  id="prefix__Vector_13"
                  d="M239.213 419.123V202.687a5.024 5.024 0 015.029-5.026h22.445a5.04 5.04 0 013.556 1.472 5.017 5.017 0 011.473 3.554v217l-32.503-.564z"
                />
                <motion.path
                  strokeDasharray="0 1"
                  variants={chartVariants.rectangle}
                  id="prefix__Vector_14"
                  d="M313.343 419.801V247.705a5.026 5.026 0 015.029-5.026h22.445a5.026 5.026 0 015.029 5.026v171.726l-32.503.37z"
                />
                <motion.path
                  strokeDasharray="0 1"
                  variants={chartVariants.rectangle}
                  id="prefix__Vector_15"
                  d="M419.977 120.058v297.663c-10.835.308-21.669.597-32.504.867v-298.53a5.033 5.033 0 015.03-5.027h22.444a5.033 5.033 0 015.03 5.027z"
                />
                <motion.path
                  strokeDasharray="0 1"
                  variants={chartVariants.rectangle}
                  id="prefix__Vector_16"
                  d="M494.107 179.892v235.351c-10.835.524-21.669.894-32.503 1.225V179.892c0-1.333.529-2.611 1.473-3.554a5.032 5.032 0 013.556-1.472h22.444a5.026 5.026 0 015.03 5.026z"
                />
              </motion.g>
            </g>
            <g id="prefix__crutches">
              <motion.g
                variants={chartVariants.stagger}
                initial="hidden"
                animate={staggerArrowleControls}
              >
                <motion.path
                  variants={chartVariants.line}
                  id="prefix__Vector_17"
                  d="M181.619 213.628l74.13-82.629 74.131 41.599 74.13-127.647 74.13 60.974"
                  stroke="#F8F8F8"
                  strokeWidth={7}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <motion.path
                  variants={chartVariants.buble}
                  id="prefix__Vector_18"
                  d="M181.334 229.584c8.818 0 15.967-7.144 15.967-15.956s-7.149-15.956-15.967-15.956c-8.818 0-15.966 7.144-15.966 15.956s7.148 15.956 15.966 15.956z"
                  fill="currentColor"
                />
                <motion.path
                  variants={chartVariants.buble}
                  id="prefix__Vector_19"
                  d="M255.464 146.955c8.818 0 15.967-7.144 15.967-15.956s-7.149-15.956-15.967-15.956c-8.818 0-15.966 7.144-15.966 15.956s7.148 15.956 15.966 15.956z"
                  fill="currentColor"
                />
                <motion.path
                  variants={chartVariants.buble}
                  id="prefix__Vector_20"
                  d="M329.595 188.554c8.818 0 15.966-7.143 15.966-15.956 0-8.812-7.148-15.956-15.966-15.956s-15.967 7.144-15.967 15.956c0 8.813 7.149 15.956 15.967 15.956z"
                  fill="currentColor"
                />
                <motion.path
                  variants={chartVariants.buble}
                  id="prefix__Vector_21"
                  d="M403.725 60.907c8.818 0 15.967-7.144 15.967-15.956 0-8.813-7.149-15.956-15.967-15.956-8.818 0-15.967 7.143-15.967 15.956 0 8.812 7.149 15.956 15.967 15.956z"
                  fill="currentColor"
                />
              </motion.g>
            </g>
            <g id="prefix__character">
              <motion.g variants={chartVariants} animate={characterControls}>
                <path
                  id="prefix__Vector_22"
                  d="M546.283 196.532c8.818 0 15.967-7.143 15.967-15.956 0-8.812-7.149-15.956-15.967-15.956-8.818 0-15.966 7.144-15.966 15.956 0 8.813 7.148 15.956 15.966 15.956z"
                  fill="currentColor"
                />
                <path
                  id="prefix__Vector_23"
                  d="M484.47 190.361a5.128 5.128 0 001.14 2.718c.827.934 2.065 1.362 3.177 1.92a12.54 12.54 0 016.135 7.049c1.899 5.539 2.144 11.397 4.562 16.743 2.418 5.345 5.258 10.479 7.345 15.956 1.186 3.105 2.132 6.336 3.872 9.163a14.228 14.228 0 003.176 3.653 83.905 83.905 0 00-.171 5.995 2.28 2.28 0 011.95 1.025 5.92 5.92 0 01.855 2.137c.782 3.231-.182 6.673.519 9.921a50.442 50.442 0 01-1.71 27.148c-.782 2.211-1.762 9.528-.93 11.722 3.102-.313 5.851 1.59 8.753 2.85a12.022 12.022 0 01-.41 5.128c-1.044 3.003-1.038 6.269-1.021 9.443l.142 23.512c0 2.98.04 6.001.787 8.89.85 3.254 2.635 6.57 2.578 9.932-.154 7.237 3.267 14.133 2.994 21.313-.052 1.379-.24 2.747-.371 4.114a46.746 46.746 0 00.274 10.936c1.037 7.214 3.78 14.309 3.096 21.563-.046.49-.211 1.14-.673 1.328.57.644 1.175 1.282 1.791 1.892a1.629 1.629 0 01-.497.518 5.029 5.029 0 01-2.178.57 4.62 4.62 0 00-2.492.809 3.594 3.594 0 00-1.038 1.904 5.137 5.137 0 00.685 4.262 4.763 4.763 0 001.933 1.448c2.634 1.139 5.657.313 8.405-.519l10.766-3.26a3.622 3.622 0 001.751-.911c.223-.264.371-.583.427-.923 2.378.569 4.99-.132 7.413-.855l10.766-3.266a3.568 3.568 0 001.751-.911 2.075 2.075 0 00.439-1.71c.08-.034.16-.057.24-.097.821-.37 1.71-1.094 1.511-1.966-.143-.57-.713-.9-.958-1.424a2.055 2.055 0 01.399-2.012c.422-.57.992-1.043 1.38-1.641 1.243-1.903.399-4.405-.069-6.633-1.009-4.759-.074-9.728-.712-14.549-.217-1.624-.611-3.219-.924-4.832a98.42 98.42 0 01-1.317-11.523c-.411-5.516-1.945-10.952-1.067-16.423.427-3.21.608-6.449.542-9.687a42.225 42.225 0 00-.268-6.178c-.222-1.527-.616-3.025-.787-4.558a41.264 41.264 0 01-.091-5.18 51.217 51.217 0 00-1.061-11.466c-1.14-5.18-3.284-10.138-4.197-15.329.308.068.616.137.913.217.034-3.989-3.462-12.663-4.756-16.446a4.761 4.761 0 01-.342-1.454c.078-.658.198-1.311.359-1.954.165-1.379-.57-2.69-.77-4.069a9.552 9.552 0 01.211-2.895c.918-5.1 2.059-10.16 3.199-15.215.497-1.831.669-3.734.508-5.624a7.053 7.053 0 011.71-5.602 6.643 6.643 0 001.266-1.59c.19-.508.275-1.048.251-1.59a25.523 25.523 0 00-1.026-6.924c1.003-1.817 1.374-4.051 1.665-6.16.639-4.655 1.277-9.334 1.254-14.035a23.765 23.765 0 00-1.026-7.408 29.452 29.452 0 00-1.95-4.297c-3-5.773-5.868-11.847-9.654-17.136-1.141-1.607-.422-3.823-.342-5.806.085-2.394-.861-4.69-1.791-6.89a11.303 11.303 0 00-2.144-3.687 3.499 3.499 0 00-2.509-1.14 3.79 3.79 0 00-2.674 1.636 8.813 8.813 0 00-1.603 6.593 12.745 12.745 0 002.903 6.229 14.121 14.121 0 002.503 2.376c.943 2.994 1.893 5.985 2.851 8.975 1.506 4.758 3.011 9.539 5.132 14.041.622 1.305 1.306 2.633 1.38 4.075.08 1.556-.57 3.037-1.089 4.502a31.762 31.762 0 00-1.836 9.493 3.228 3.228 0 00-.479.263c-1.796 1.173-2.361 3.732-4.231 4.781-1.089.609-2.412.57-3.633.849-.108 0-.216.057-.33.091-.046-.228-.092-.45-.12-.684a1.791 1.791 0 010-.439 19.138 19.138 0 007.088-6.747c.366-.523.649-1.1.838-1.709a6.614 6.614 0 00.086-2.223 35.494 35.494 0 00-1.055-7.322 12.183 12.183 0 00-3.815-6.206c-.935-.752-2.013-1.317-2.942-2.074-1.814-1.465-3.057-3.63-5.133-4.719a6.175 6.175 0 00-7.76 2.006 4.517 4.517 0 01-1.141 1.448c-.363.171-.717.361-1.061.569-.627.502-.661 1.465-.456 2.246.389 1.604.607 3.245.65 4.895a11.96 11.96 0 00-.034 15.483c0 1.06 0 2.119-.04 3.179 0 .2 0 .405-.04.604a4.114 4.114 0 01-1.71-1.139c-.639-.798-.753-1.972-1.534-2.627a4.33 4.33 0 00-1.871-.684 11.617 11.617 0 01-4.562-2.16c-1.054-.815-2.149-1.858-3.381-2.097a74.92 74.92 0 00-7.413-11.306 21.982 21.982 0 01-1.939-2.661c-1.226-2.137-1.591-4.65-2.366-6.992-2.167-6.565-7.573-11.83-8.89-18.623-.479-2.462-2.042-4.604-3.114-6.873-.724-1.532-1.522-3.151-2.971-4.028-1.864-1.14-4.442-.616-5.993.917a7.192 7.192 0 00-1.853 6.058zm67.704 230.614a5.036 5.036 0 01-2.179.57c-.383.04-.764.101-1.14.182-.143-1.196-.222-2.41-.314-3.59-.302-3.869-.906-7.71-1.505-11.545-.627-3.989-.924-8.354-2.281-12.183-2.184-6.235-4.397-12.657-4.117-19.261.063-1.499.251-2.986.331-4.48.182-3.698-.337-7.476.57-11.072.405-1.635 1.095-3.197 1.357-4.861.167-1.502.186-3.018.057-4.524a60.131 60.131 0 011.294-15.586c1.061 1.385 1.409 3.174 1.711 4.889l2.139 11.591c1.271 6.879 2.395 14.173 5.765 20.293-.474 2.205-.941 4.559-.16 6.667.336.912.89 1.71 1.232 2.633.57 1.533.49 3.22.661 4.844.371 3.419 1.785 6.781.747 10.08a49.232 49.232 0 00-2.07 10.463 25.55 25.55 0 01-.342 2.946c-.182.878-.479 1.71-.644 2.61a8.637 8.637 0 00.165 3.801c.256.687.413 1.406.468 2.137 0 .729-.896 1.254-1.614 1.368.211.273.439.535.673.792a2.506 2.506 0 01-.804 1.236z"
                  fill="url(#prefix__paint0_linear)"
                />
                <path
                  id="prefix__Vector_24"
                  d="M529.655 427.551a4.621 4.621 0 00-2.492.81 3.512 3.512 0 00-1.038 1.892 5.063 5.063 0 00.685 4.228 4.75 4.75 0 001.933 1.442c2.634 1.139 5.657.307 8.405-.519l10.766-3.237a3.623 3.623 0 001.751-.906 2.377 2.377 0 00.045-2.769 5.366 5.366 0 00-2.281-1.818c-3.347-1.63-7.122-2-10.8-2.069-1.368 0-2.72-.33-3.649.724-.491.57-.4 1.18-1.141 1.664a5.123 5.123 0 01-2.184.558z"
                  stroke="#F8F8F8"
                />
                <path
                  id="prefix__Vector_25"
                  d="M549.995 421.636a4.66 4.66 0 00-2.492.81 3.534 3.534 0 00-1.037 1.892 5.073 5.073 0 00.684 4.234 4.798 4.798 0 001.933 1.436c2.64 1.139 5.657.313 8.405-.513l10.766-3.243a3.614 3.614 0 001.751-.906 2.367 2.367 0 00.045-2.764 5.402 5.402 0 00-2.28-1.817c-3.353-1.63-7.128-2.006-10.806-2.075-1.369 0-2.715-.325-3.65.73-.49.57-.399 1.174-1.14 1.658a4.968 4.968 0 01-2.179.558z"
                  stroke="#F8F8F8"
                />
                <path
                  id="prefix__Vector_26"
                  d="M540.638 304.873a132.791 132.791 0 0119.097-.536c.42-.004.838.062 1.237.194 1.403.57 1.62 2.405 1.751 3.904.57 6.086 3.227 11.756 4.562 17.716a50.618 50.618 0 011.06 11.398 40.82 40.82 0 00.092 5.128c.171 1.522.57 3.015.787 4.531.24 2.036.33 4.087.268 6.137a62.925 62.925 0 01-.542 9.613c-.878 5.431.656 10.828 1.066 16.321a97.343 97.343 0 001.295 11.46c.313 1.601.707 3.185.923 4.798.639 4.793-.296 9.727.713 14.457.468 2.211 1.312 4.696.069 6.588-.388.57-.958 1.054-1.38 1.63a2.028 2.028 0 00-.399 2c.245.518.815.86.958 1.413.222.872-.69 1.584-1.512 1.955-6.187 2.792-14.164.826-18.338-4.525.718-.114 1.596-.633 1.613-1.362a7.673 7.673 0 00-.467-2.12 8.537 8.537 0 01-.165-3.772c.165-.878.461-1.71.644-2.593.171-.969.285-1.947.342-2.929a48.525 48.525 0 012.07-10.394c1.038-3.277-.376-6.594-.747-10.013-.171-1.618-.097-3.288-.662-4.815-.342-.9-.895-1.71-1.231-2.61-.781-2.103-.314-4.439.159-6.627-3.37-6.081-4.493-13.329-5.765-20.162l-2.138-11.511c-.319-1.709-.667-3.482-1.711-4.861a59.348 59.348 0 00-1.294 15.483 22.82 22.82 0 01-.057 4.496c-.262 1.653-.952 3.209-1.357 4.827-.884 3.573-.365 7.323-.57 10.998-.08 1.488-.269 2.964-.331 4.451-.28 6.565 1.933 12.947 4.117 19.141 1.34 3.801 1.636 8.121 2.281 12.098.57 3.813 1.203 7.625 1.505 11.471.28 3.534.405 7.357 2.606 10.132-2.013 1.305-4.088 2.633-6.443 3.083a11.905 11.905 0 01-7.938-1.538 24.98 24.98 0 01-6.273-5.328c.462-.16.628-.832.673-1.317.684-7.214-2.058-14.246-3.096-21.426a46.118 46.118 0 01-.274-10.862c.131-1.362.319-2.724.371-4.091.273-7.129-3.165-13.996-3.04-21.131.057-3.345-1.71-6.638-2.577-9.869-.747-2.85-.77-5.87-.787-8.833l-.142-23.364c0-3.157 0-6.394 1.02-9.374 1.255-3.59-.182-7.71-.399-11.506a47.482 47.482 0 0018.356 2.046z"
                  fill="#2c2c2c"
                />
                <path
                  id="prefix__Vector_27"
                  d="M520.309 237.744a74.472 74.472 0 00-8.73-13.773 21.878 21.878 0 01-1.939-2.644c-1.226-2.126-1.591-4.622-2.366-6.947-2.167-6.519-7.573-11.756-8.89-18.497-.479-2.451-2.042-4.559-3.114-6.839-.724-1.521-1.522-3.128-2.971-3.989-1.864-1.139-4.442-.615-5.993.912a7.114 7.114 0 00-1.836 6.012 5.087 5.087 0 001.14 2.701c.827.929 2.065 1.351 3.177 1.909a12.472 12.472 0 016.135 7.004c1.899 5.499 2.144 11.323 4.562 16.634s5.258 10.405 7.345 15.836c1.186 3.083 2.132 6.269 3.872 9.118 1.739 2.849 4.453 5.237 7.732 5.664a19.08 19.08 0 01.929-6.086c.713-2.245 1.979-4.889.947-7.015z"
                  fill="#A0616A"
                />
                <path
                  id="prefix__Vector_28"
                  d="M555.612 242.007c-.146-4.03.483-8.05 1.853-11.842.525-1.453 1.141-2.929 1.09-4.473-.075-1.436-.759-2.753-1.38-4.052-2.144-4.473-3.65-9.215-5.132-13.944l-2.852-8.919a13.85 13.85 0 01-2.503-2.365 12.584 12.584 0 01-2.902-6.188 8.69 8.69 0 011.602-6.542 3.8 3.8 0 012.674-1.63 3.515 3.515 0 012.509 1.14 11.207 11.207 0 012.144 3.658c.93 2.189 1.876 4.468 1.791 6.839-.08 1.971-.815 4.171.342 5.772 3.786 5.254 6.655 11.289 9.654 17.027a28.833 28.833 0 011.95 4.269 23.458 23.458 0 011.027 7.374c0 4.667-.616 9.317-1.255 13.944-.405 2.901-.935 6.058-3.13 7.978-2.281-2.918-4.574-5.767-7.482-8.046z"
                  fill="#A0616A"
                />
                <path
                  id="prefix__Vector_29"
                  d="M541.105 244.229c6.535 0 11.833-5.294 11.833-11.824 0-6.531-5.298-11.825-11.833-11.825-6.534 0-11.832 5.294-11.832 11.825 0 6.53 5.298 11.824 11.832 11.824z"
                  fill="#A0616A"
                />
                <path
                  id="prefix__Vector_30"
                  d="M546.836 244.856c.285 2.137 1.432 4.052 2.549 5.898.673 1.14 1.534 2.353 2.851 2.479a57.464 57.464 0 01-10.748 4.319c-1.265.425-2.59.638-3.924.633a9.59 9.59 0 01-3.267-.838 16.246 16.246 0 01-9.232-10.782 21.38 21.38 0 004.396-.336 3.233 3.233 0 002.156-1.06 3.42 3.42 0 00.445-1.903 98.225 98.225 0 000-5.921 23.393 23.393 0 018.599 1.06c1.14.37 2.281.815 3.421 1.106.719.182 2.697 0 3.228.416.872.587-.673 3.476-.474 4.929z"
                  fill="#A0616A"
                />
                <path
                  id="prefix__Vector_31"
                  d="M541.636 252.042a7.446 7.446 0 015.668-6.616c1.22-.274 2.543-.24 3.632-.844 1.871-1.043 2.435-3.584 4.231-4.752 1.797-1.168 4.346-.519 5.908.957 1.562 1.476 2.355 3.579 2.994 5.636a28.526 28.526 0 011.534 8.633 4.009 4.009 0 01-.251 1.579 6.583 6.583 0 01-1.266 1.578 6.994 6.994 0 00-1.711 5.568 15.96 15.96 0 01-.507 5.584c-1.141 5.026-2.281 10.047-3.199 15.119a9.345 9.345 0 00-.211 2.849c.176 1.373.935 2.672.769 4.046a15.412 15.412 0 00-.359 1.943c.037.496.153.982.342 1.442 1.295 3.755 4.79 12.36 4.756 16.338-6.073-1.556-15.026-1.904-21.298-1.932a47.392 47.392 0 00-5.166.228c-4.123.444-8.343 1.647-12.34.535-3.712-1.031-6.997-3.989-10.835-3.618-.832-2.177.149-9.443.93-11.642a49.805 49.805 0 001.71-26.972c-.701-3.225.263-6.65-.518-9.852a5.88 5.88 0 00-.856-2.126 2.28 2.28 0 00-1.95-1.02 72.53 72.53 0 011.426-15.346c.376-1.795 1.14-3.915 2.982-4.223 1.631-.279 2.999 1.1 4.311 2.109a11.589 11.589 0 004.562 2.142c.668.08 1.308.314 1.87.684.781.65.895 1.818 1.534 2.61 1.14 1.419 3.689 1.299 4.499 2.935.177.487.32.986.428 1.493a5.476 5.476 0 001.882 2.427 10.578 10.578 0 004.499 2.508z"
                  fill="currentColor"
                />
                <path
                  id="prefix__Vector_32"
                  d="M531.491 219.834c-.205-.781-.171-1.71.457-2.234.313-.245.724-.336 1.06-.57a4.571 4.571 0 001.141-1.442 6.193 6.193 0 017.749-1.966c2.059 1.077 3.302 3.231 5.132 4.684.93.753 2.007 1.311 2.943 2.063a12.082 12.082 0 013.814 6.166c.606 2.38.96 4.817 1.055 7.271a6.524 6.524 0 01-.085 2.212 6.202 6.202 0 01-.838 1.709c-1.882 2.849-4.363 5.436-7.47 6.907-3.108 1.47-6.889 1.709-9.957.171a1.719 1.719 0 01-.764-.61 2.198 2.198 0 01-.12-1.316 8.998 8.998 0 00-.992-5.044c-.57-1.139-1.425-2.12-1.882-3.299a11.51 11.51 0 01-.536-4.092c-.051-3.584.194-7.157-.707-10.61z"
                  fill="#3e3f46"
                />
              </motion.g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="prefix__paint0_linear"
              x1={573.666}
              y1={308.423}
              x2={484.396}
              y2={308.423}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="gray" stopOpacity={0.25} />
              <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
              <stop offset={1} stopColor="gray" stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </Wrapper>
  );
};

ChartsSvg.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { ChartsSvg };
