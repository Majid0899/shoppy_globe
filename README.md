# 🛍️ ShoppyGlobe E-commerce Application

ShoppyGlobe is a basic yet functional e-commerce application built using **React**, **Redux**, and **React Router**. It allows users to browse products, view product details, add/remove items to/from a shopping cart,Checkout the product, proceed to payment and navigate through the application using clean and intuitive UI.


##  Features

- Home page with Hero section and Featuerd product and Footer
- Product listing with search functionality.
- Product detail page via dynamic routing.
- Shopping cart with quantity management and item removal.
- Redux for advanced state management (Cart).
- Custom hook for fetching products.
- Error handling for API calls.
- Code-splitting with lazy-loaded components.
- Responsive design with modern styling.
- 404 NotFound page for unknown routes.

## Component Structure

| Component      | Description |
|----------------|-------------|
| `App`          | Root component containing Router and Layout |
| `Header`       | Navigation bar with logo, cart icon |
| `ProductList`  | Fetches and displays products |
| `ProductItem`  | Represents a single product with “Add to Cart” |
| `ProductDetail`| Displays details of a selected product |
| `Cart`         | Shows items in the cart with quantity controls |
| `CartItem`     | Represents each product in the cart |
| `NotFound`     | Displayed on unknown routes (404) |
| `Checkout`     | Displayed all cart items with proceed to payment button |

## Folder Structure

src/
├── components/
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   ├── CartItem.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── Cart.jsx
│   ├── ProductDetail.jsx
│   ├── NotFound.jsx

├── redux/
│   ├── store.js
│   ├── cartSlice.js
    |── searchSlice.js
├── utils/
│   └── useFetch.js
├── App.jsx
├── main.jsx
├── index.js
└── App.css

Redux is used to manage:

-  **Cart Items**: Add, remove Quantities
-  **Search Query**: Filter products in `ProductList`

### Slices

- `cartSlice.js`
- `searchSlice.js`

## 🔁 Routing (React Router)

React Router v6 is used to handle navigation between:

| Path           | pages       |
|----------------|-----------------|
| `/`            | Home            |
| `/product/:id` | ProductDetail   |
| `/cartitems`   | Cart            |
| `*`            | NotFound        |
| `/products`    | ProductList     |
| `/checkout`    | Checkout        |

## Data Fetching

- Fetches from: `https://dummyjson.com/products`
- Uses a **custom hook**: `useFetch`
- Stores data in component state

## Performance Optimization

- Lazy load components using `React.lazy()` and `Suspense`
- Code splitting for better performance and faster load

##  GitHub Repository

🔗 **Repo Link**: https://github.com/Majid0899/shoppy_globe.git;

##   Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/Majid0899/shoppy_globe.git
cd shoppy_globe

npm install

npm run dev

http://localhost:5173

---