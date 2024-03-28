import marble from '../../assets/marble.jpeg';
import './Background.css'; // Import CSS file for styles

const MarbleBackground = () => {
    return (
        <div className="marble-background">
            <img src={marble} alt="Marble Background" className="marble-image" />
            <div className="content">
                {/* Content goes here */}
            </div>
        </div>
    );
};

export default MarbleBackground;
