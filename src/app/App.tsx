import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BestSellers } from './components/BestSellers';
import { HealthBenefits } from './components/HealthBenefits';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductListing } from './components/ProductListing';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Login } from './components/Login';
import { OrderHistory } from './components/OrderHistory';
import { Wishlist } from './components/Wishlist';
import { products } from './data/products';
import type { Product, CartItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product: Product, quantity: number, weight: string) => {
    const existingItem = cartItems.find(
      item => item.product.id === product.id && item.weight === weight
    );

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity, weight }]);
    }
  };

  const updateCartItemQuantity = (productId: number, weight: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(
        item => !(item.product.id === productId && item.weight === weight)
      ));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.product.id === productId && item.weight === weight
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId: number, weight: string) => {
    setCartItems(cartItems.filter(
      item => !(item.product.id === productId && item.weight === weight)
    ));
  };

  const toggleWishlist = (productId: number) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter(id => id !== productId));
    } else {
      setWishlistItems([...wishlistItems, productId]);
    }
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header
        onNavigate={navigateToPage}
        cartItemCount={cartItemCount}
        isLoggedIn={isLoggedIn}
      />

      {currentPage === 'home' && (
        <>
          <Hero onNavigate={navigateToPage} />
          <FeaturedProducts products={products} onProductClick={navigateToProduct} />
          <BestSellers products={products} onProductClick={navigateToProduct} />
          <HealthBenefits />
          <Testimonials />
          <Newsletter />
        </>
      )}

      {currentPage === 'shop' && (
        <ProductListing
          products={products}
          onProductClick={navigateToProduct}
          wishlistItems={wishlistItems}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {currentPage === 'product-detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          products={products}
          onProductClick={navigateToProduct}
          isInWishlist={wishlistItems.includes(selectedProduct.id)}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {currentPage === 'cart' && (
        <Cart
          cartItems={cartItems}
          onUpdateQuantity={updateCartItemQuantity}
          onRemove={removeFromCart}
          onNavigate={navigateToPage}
        />
      )}

      {currentPage === 'checkout' && (
        <Checkout cartItems={cartItems} onNavigate={navigateToPage} />
      )}

      {currentPage === 'about' && <About />}

      {currentPage === 'contact' && <Contact />}

      {currentPage === 'faq' && <FAQ />}

      {currentPage === 'blog' && <Blog />}

      {currentPage === 'login' && (
        <Login onLogin={() => setIsLoggedIn(true)} onNavigate={navigateToPage} />
      )}

      {currentPage === 'orders' && <OrderHistory />}

      {currentPage === 'wishlist' && (
        <Wishlist
          wishlistItems={wishlistItems}
          products={products}
          onProductClick={navigateToProduct}
          onToggleWishlist={toggleWishlist}
        />
      )}

      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
