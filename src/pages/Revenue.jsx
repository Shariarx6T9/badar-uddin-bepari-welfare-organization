import React from 'react';

const Card = ({ title, amount, icon, color }) => (
  <div style={{
    background: '#fff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    borderTop: `4px solid ${color}`
  }}>
    <div style={{ fontSize: '32px', color: color, marginBottom: '12px' }}>{icon}</div>
    <h3 style={{ color: '#4b5563', fontSize: '18px' }}>{title}</h3>
    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginTop: '8px' }}>
      {amount.toLocaleString('en-IN')} BDT
    </p>
  </div>
);

export default function Revenue() {
  const totalCollection = 200000;
  const totalInvestment = 60000;
  const needyDonation = 30000;
  const availableFund = totalCollection - totalInvestment - needyDonation;

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>তহবিল বিবরণী (বার্ষিক)</h1>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>
          বদর উদ্দিন বেপারী কল্যাণ সংস্থার বার্ষিক আয় ও ব্যয়ের সংক্ষিপ্ত বিবরণী।
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        <Card title="মোট সংগৃহীত তহবিল" amount={totalCollection} icon="📥" color="#3b82f6" />
        <Card title="মোট বিনিয়োগ" amount={totalInvestment} icon="📈" color="#f97316" />
        <Card title="অসহায়দের জন্য ব্যয়" amount={needyDonation} icon="❤️" color="#ef4444" />
        <Card title="অবশিষ্ট তহবিল" amount={availableFund} icon="🏦" color="#10b981" />
      </div>

      <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}>বিস্তারিত বিবরণ</h2>
        <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
            <span>মোট সংগৃহীত তহবিল:</span>
            <span style={{ fontWeight: 'bold' }}>+ {totalCollection.toLocaleString('en-IN')} BDT</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
            <span>সংস্থার উন্নয়নে বিনিয়োগ:</span>
            <span style={{ fontWeight: 'bold', color: '#f97316' }}>- {totalInvestment.toLocaleString('en-IN')} BDT</span>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
            <span>দুঃস্থ ও অসহায়দের জন্য ব্যয়:</span>
            <span style={{ fontWeight: 'bold', color: '#ef4444' }}>- {needyDonation.toLocaleString('en-IN')} BDT</span>
          </li>
           <li style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', marginTop: '8px', borderTop: '2px solid #1f2937' }}>
            <span style={{fontWeight: 'bold', fontSize: '18px'}}>বর্তমানে তহবিলে আছে:</span>
            <span style={{ fontWeight: 'bold', color: '#10b981', fontSize: '18px' }}>= {availableFund.toLocaleString('en-IN')} BDT</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
