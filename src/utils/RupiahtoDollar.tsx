// Fungsi untuk mengonversi Rupiah ke Dolar
export const convertRupiahToDollar = (amount: number | string): number => {
  // Anda bisa mengganti nilai kurs dengan yang aktual
  const kurs = 0.000070;

  // Jika amount adalah string, konversi menjadi angka
  const amountNumber = typeof amount === 'string' ? parseFloat(amount.replace(/\./g, '').replace(',', '.')) : amount;

  const convertamount = amountNumber * kurs;
  return parseFloat(convertamount.toFixed(2)); // Mengembalikan nilai sebagai number
}
