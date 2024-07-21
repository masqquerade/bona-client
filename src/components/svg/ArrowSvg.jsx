export const ArrowSvg = ({ width, height, direction }) => {
    const selectArrow = () => {
        if (direction == 'left') {
            return (
                <svg width={width} height={height} viewBox="0 0 11 16" fill="none">
                    <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM11 7L1 7L1 9L11 9L11 7Z" fill="white" fill-opacity="0.4"/>
                </svg>
            );
        } else {
            return (
                <svg width={width} height={height} viewBox="0 0 11 16" fill="none">
                    <path d="M10.7071 8.70711C11.0976 8.31658 11.0976 7.68342 10.7071 7.29289L4.34315 0.928932C3.95262 0.538408 3.31946 0.538408 2.92893 0.928932C2.53841 1.31946 2.53841 1.95262 2.92893 2.34315L8.58579 8L2.92893 13.6569C2.53841 14.0474 2.53841 14.6805 2.92893 15.0711C3.31946 15.4616 3.95262 15.4616 4.34315 15.0711L10.7071 8.70711ZM8.74228e-08 9L10 9L10 7L-8.74228e-08 7L8.74228e-08 9Z" fill="white" fill-opacity="0.4"/>
                </svg>

            );
        }
    }

    return selectArrow();
};