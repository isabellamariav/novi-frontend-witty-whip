import marble from '../../assets/marble.jpeg';
import './Background.css';

const MarbleBackground = () => {
    return (
        <div className="marble-background">
            <img src={marble} alt="Marble Background" className="marble-image" />
        </div>
    );
};

export default MarbleBackground;
