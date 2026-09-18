import React from 'react'

const Map = () => {
  return (
    <div className="map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72272934362!2d-0.26213322530257605!3d5.591373811683284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1781789998308!5m2!1sen!2sgh"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Accra Map"
      />
    </div>
  )
}

export default Map