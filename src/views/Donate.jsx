import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StatCard({ number, label }) {
    return (
        <div className="stat-card">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

function DonationCard({ amount, label, selected, onSelect }) {
    return (
        <button
            className={`donation-card ${selected ? 'selected' : ''}`}
            onClick={() => onSelect(amount)}
            type="button"
        >
            <div className="donation-amount">${amount}</div>
            <div className="donation-label">{label}</div>
        </button>
    );
}

function ImpactStoryCard({ photo, title, text }) {
    return (
        <div className="impact-card">
            <img src={photo} alt={title} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}

export default function DonatePage() {
    const navigate = useNavigate();
    const presets = [
        { amount: 25, label: 'Food for one week' },
        { amount: 50, label: 'Medical checkup' },
        { amount: 100, label: 'Vaccinations for a litter' },
        { amount: 250, label: 'Emergency surgery' },
    ];

    const [amount, setAmount] = useState(50);
    const [custom, setCustom] = useState('');
    const [method, setMethod] = useState('card');
    const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });
    const [card, setCard] = useState({ number: '', expiry: '', cvv: '', name: '' });
    const [recurring, setRecurring] = useState(false);
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        // restore last donation (demo persistence)
        const last = localStorage.getItem('purrfect:lastDonation');
        if (last) {
            try {
                const parsed = JSON.parse(last);
                if (parsed.amount) setAmount(parsed.amount);
            } catch { }
        }
    }, []);

    const selectPreset = (amt) => {
        setAmount(amt);
        setCustom('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            alert('Please fill name and email');
            return;
        }
        if (!terms) {
            alert('Please agree to the terms');
            return;
        }

        const finalAmount = Number(custom) || Number(amount) || 0;
        if (finalAmount <= 0) {
            alert('Please enter a valid donation amount');
            return;
        }

        setLoading(true);
        setSuccess(null);

        // simulate payment processing
        setTimeout(() => {
            const receipt = {
                id: 'RCPT-' + Date.now(),
                amount: finalAmount,
                name: form.name,
                email: form.email,
                method,
                recurring,
                date: new Date().toISOString(),
            };
            localStorage.setItem('purrfect:lastDonation', JSON.stringify(receipt));
            setLoading(false);
            setSuccess(receipt);
            // optionally navigate to confirmation section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1200);
    };

    return (
        <section className="donate-page">
            <div className="donate-hero">
                <div className="donate-hero-inner">
                    <h1>Support Our Mission</h1>
                    <p>Every donation helps us rescue, care for, and find homes for cats in need</p>
                    <div className="stats">
                        <StatCard number="500+" label="Cats Rescued" />
                        <StatCard number="95%" label="Adoption Rate" />
                        <StatCard number="$50K" label="Annual Vet Costs" />
                    </div>
                </div>
            </div>

            <div className="donate-content">
                <div className="donation-column">
                    <h2>Choose an amount</h2>
                    <div className="donation-presets">
                        {presets.map((p) => (
                            <DonationCard
                                key={p.amount}
                                amount={p.amount}
                                label={p.label}
                                selected={Number(amount) === p.amount && !custom}
                                onSelect={selectPreset}
                            />
                        ))}

                        <div className="donation-card custom">
                            <label>Custom</label>
                            <input
                                type="number"
                                min="1"
                                placeholder="Enter amount"
                                value={custom}
                                onChange={(e) => setCustom(e.target.value)}
                                onFocus={() => setAmount(0)}
                            />
                        </div>
                    </div>

                    <h2 style={{ marginTop: 20 }}>Payment</h2>
                    <div className="payment-methods">
                        <label>
                            <input type="radio" name="method" checked={method === 'card'} onChange={() => setMethod('card')} /> Credit/Debit Card
                        </label>
                        <label>
                            <input type="radio" name="method" checked={method === 'paypal'} onChange={() => setMethod('paypal')} /> PayPal
                        </label>
                        <label>
                            <input type="radio" name="method" checked={method === 'bank'} onChange={() => setMethod('bank')} /> Bank Transfer
                        </label>
                    </div>

                    {method === 'card' && (
                        <div className="card-fields">
                            <input placeholder="Card number" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} />
                            <div style={{ display: 'flex', gap: 8 }}>
                                <input placeholder="MM/YY" value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} />
                                <input placeholder="CVV" value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} />
                            </div>
                            <input placeholder="Name on card" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} />
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="donation-form">
                        <h2>Donor information</h2>
                        <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        <input placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        <input placeholder="Address (optional)" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />

                        <label className="recurring">
                            <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} /> Make this a monthly donation
                        </label>

                        <label className="terms">
                            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} /> I agree to the terms and privacy policy
                        </label>

                        <div style={{ marginTop: 12 }}>
                            <button className="adopt-button" type="submit" disabled={loading}>{loading ? 'Processing...' : `Donate $${Number(custom) || Number(amount) || 0}`}</button>
                        </div>
                    </form>
                </div>

                <aside className="impact-column">
                    <div className="impact-section">
                        <h3>Impact Stories</h3>
                        <ImpactStoryCard photo="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop&s=" title="Milo" text="Saved from the streets, now thriving in a loving home." />
                        <ImpactStoryCard photo="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&s=" title="Luna" text="Recovered after surgery and adopted within weeks." />
                    </div>

                    <div className="other-ways">
                        <h3>Other Ways to Help</h3>
                        <ul>
                            <li><a href="#">Volunteer opportunities</a></li>
                            <li><a href="#">Sponsor a cat program</a></li>
                            <li><a href="#">Amazon Wishlist</a></li>
                            <li><a href="#">Corporate matching</a></li>
                        </ul>
                    </div>
                </aside>
            </div>

            {success && (
                <div className="donation-success">
                    <h3>Thank you — donation received</h3>
                    <p>Receipt: {success.id}</p>
                    <p>Amount: ${success.amount}</p>
                </div>
            )}
        </section>
    );
}
