'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { removeItem } = useCart();

    return (
        <div className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            <div className="flex-1">
                <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                <p className="text-sm text-gray-500">Adet: {item.quantity}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                    ₺{(item.price * item.quantity).toFixed(2)}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                    aria-label="Ürünü kaldır"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}