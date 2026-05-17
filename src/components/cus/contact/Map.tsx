const Map = () => {
  return (
    <div className="w-full aspect-video md:aspect-4/3 rounded-xl overflow-hidden">
      <iframe
        className="w-full h-full"
        allowFullScreen
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.2115454977607!2d105.73461888970328!3d21.053618016172848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2sHanoi%20University%20of%20Industry!5e1!3m2!1sen!2s!4v1765092663308!5m2!1sen!2s"
      ></iframe>
    </div>
  );
};

export default Map;
