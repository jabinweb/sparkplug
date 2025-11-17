'use client';

import { useState } from 'react';

interface PaymentButtonProps {
  amount: number;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function PaymentButton({
  amount,
  onSuccess,
  onError,
  className = "bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // This is where you would integrate with a payment gateway like Razorpay, Stripe, etc.
      // For now, we'll simulate the payment process
      
      // Example Razorpay integration:
      /*
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID',
        amount: amount * 100, // Razorpay expects amount in paisa
        currency: currency,
        name: 'School of Social Change',
        description: description,
        handler: function (response: any) {
          onSuccess?.(response.razorpay_payment_id);
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#2563eb'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      */

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      const mockPaymentId = 'pay_' + Math.random().toString(36).substr(2, 9);
      onSuccess?.(mockPaymentId);
      
      alert(`Payment of ₹${amount.toLocaleString()} processed successfully! Payment ID: ${mockPaymentId}`);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      onError?.(errorMessage);
      alert(`Payment failed: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {isProcessing ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        `Donate ₹${amount.toLocaleString()}`
      )}
    </button>
  );
}