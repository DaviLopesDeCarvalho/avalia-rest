export default function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card">
      <div className="card-image-wrapper">
        <img src={restaurant.imageUrl} alt={restaurant.name} style={{width: '100%', height: '180px', objectFit: 'cover'}}/>
        <span className="card-category">{restaurant.category}</span>
      </div>
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p>⭐ {Number(restaurant.rating).toFixed(1)} / 5.0</p>
      </div>
    </article>
  );
}