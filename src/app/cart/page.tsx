'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import CartItem from '@/components/CartItem';

export default function CartPage() {
    const { items, getTotalPrice, clearCart } = useCart();
    const totalPrice = getTotalPrice();

    return (
        <div className="min-h-screen bg-gray-50">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {items.length === 0 ? (
                    <div className="text-center py-12">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Sepetiniz Boş</h3>
                        <p className="mt-1 text-gray-500">Sepetinize henüz ürün eklemediniz.</p>
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Alışverişe Başla
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="divide-y divide-gray-200">
                            {items.map((item) => (
                                <CartItem key={`${item.id}-${item.quantity}`} item={item} />
                            ))}
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Toplam</p>
                                <p>₺{totalPrice.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                                KDV ve kargo ücreti ödeme sayfasında hesaplanır.
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        alert('Ödeme sayfasına yönlendiriliyorsunuz...');
                                    }}
                                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Ödemeye Geç
                                </button>
                            </div>
                            <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (confirm('Sepetiniz boşaltılacak, emin misiniz?')) {
                                            clearCart();
                                        }
                                    }}
                                    className="text-blue-600 font-medium hover:text-blue-500"
                                >
                                    Sepeti Boşalt
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}