import { motion } from 'motion/react';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';

export function OrderHistory() {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: 'December 20, 2024',
      status: 'Delivered',
      total: 125.99,
      items: [
        { name: 'Premium California Almonds', quantity: 2, weight: '500g' },
        { name: 'Organic Cashew Nuts', quantity: 1, weight: '250g' }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: 'December 15, 2024',
      status: 'In Transit',
      total: 89.99,
      items: [
        { name: 'Medjool Dates', quantity: 1, weight: '1kg' },
        { name: 'Roasted Pistachios', quantity: 1, weight: '500g' }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: 'December 10, 2024',
      status: 'Processing',
      total: 65.99,
      items: [
        { name: 'Walnut Halves', quantity: 1, weight: '500g' },
        { name: 'Golden Raisins', quantity: 2, weight: '250g' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'Processing':
        return <Clock className="w-5 h-5 text-orange-600" />;
      default:
        return <Package className="w-5 h-5 text-foreground/60" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl text-[#2d1f1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Order History
          </h1>

          {orders.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <Package className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <p className="text-foreground/60">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-[#2d1f1a]">
                          Order {order.id}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60">
                        Placed on {order.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-foreground/60 mb-1">Total</p>
                      <p className="text-2xl text-[#6b4423]">
                        ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-foreground/60 mb-3">Items:</p>
                    <div className="space-y-2">
                      {order.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-foreground/80">
                            {item.name} ({item.weight})
                          </span>
                          <span className="text-foreground/60">
                            x{item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 px-4 py-2 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-colors">
                      Track Order
                    </button>
                    <button className="flex-1 px-4 py-2 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
