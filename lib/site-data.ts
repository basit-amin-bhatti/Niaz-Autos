export const PHONE = 'tel:+923047952115';
export const MAPS = 'https://maps.app.goo.gl/TywnydCgp9ckNrsr8';
export const wa = (message = 'Hi Niaz Autos, I need help with my vehicle.') => `https://wa.me/923047952115?text=${encodeURIComponent(message)}`;
export const areas = ['Township', 'Johar Town', 'Model Town', 'Faisal Town', 'Wapda Town', 'Nearby Lahore Areas'];
export const services = [
 { name:'Complete Vehicle Repair', type:'vehicle', description:'One destination for your vehicle’s mechanical and electrical needs.', category:'Other' },
 { name:'Mechanical Repairs', type:'mechanical', description:'Find the fault. Fix the cause. Get your car moving again.', category:'Other' },
 { name:'Engine Work', type:'engine', description:'From unusual sounds to performance issues and engine repairs.', category:'Engine' },
 { name:'Auto Electrical', type:'electrical', description:'Wiring faults, electrical systems, starters and alternators.', category:'Electrical' },
 { name:'Battery & Charging System', type:'charging', description:'Battery checks, starting problems and charging diagnostics.', category:'Battery' },
 { name:'Brake Services', type:'brake', description:'Inspection and repair for confident, controlled stopping.', category:'Brakes' },
 { name:'Suspension & Steering', type:'suspension', description:'Restore handling and comfort. Address knocks and uneven rides.', category:'Suspension' },
 { name:'Vehicle Diagnostics', type:'diagnostics', description:'Make sense of warning lights and identify underlying faults.', category:'Warning Light' },
 { name:'Preventive Maintenance', type:'maintenance', description:'Routine care to keep everyday journeys running smoothly.', category:'Maintenance' },
 { name:'Emergency / Mobile Repairs', type:'mobile', description:'Tell us where you are. We’ll confirm how we can help.', category:'Vehicle Not Starting' },
];
export const problems = ["Car won't start", 'Battery problem', 'Engine overheating', 'Strange engine sound', 'Electrical fault', 'Warning lights', 'Brake issue', 'Suspension noise', 'Starter issue', 'Alternator problem', 'Vehicle breakdown', 'Wiring problems', 'Poor engine performance', 'General maintenance'];
export const faqs = [
 ['Do you provide mobile mechanic services?', 'Yes. Call or WhatsApp Niaz Autos, describe your vehicle problem and share your location. We’ll confirm availability and whether the work can be done at your location.'],
 ['Which areas qualify for free mechanic visits?', 'Selected nearby areas include Township, Johar Town, Model Town, Faisal Town, Wapda Town and nearby surrounding areas. Free mobile mechanic visit is available in selected nearby areas and subject to availability. Please confirm your location with us.'],
 ['Is the actual repair free?', 'No. The free offer covers travel / visit fees in eligible areas only. Inspection, diagnosis, repair labor, mechanic service and replacement parts may be charged.'],
 ['What charges may apply?', 'Applicable inspection / diagnostics, repair work, labor / mechanic service and required parts are chargeable. Ask our team to explain the work and charges before proceeding. Travel charges may apply outside eligible areas.'],
 ['Do you handle electrical repairs?', 'Yes. We handle auto electrical work, wiring faults, battery and charging problems, starters and alternators.'],
 ['Do you repair engines?', 'Yes. Engine work and mechanical repairs are part of our complete vehicle repair services. The required repair and whether workshop work is needed depend on the diagnosis.'],
 ["Can you inspect a car that won't start?", 'Yes. Tell us what happens when you try to start the car and share your location. We can arrange an inspection, subject to availability, to investigate battery, starter, electrical or mechanical issues.'],
 ['Can I send photos on WhatsApp?', 'Yes. Send photos of your vehicle, dashboard warning lights or the problem area directly in WhatsApp. Booking-form photos are not attached automatically; please add them in the chat after it opens.'],
 ['Can I visit the workshop?', 'Yes. Visit Niaz Autos in Township, Lahore. Use our Google Maps link for directions and call ahead to confirm availability.'],
 ['Is mobile mechanic availability guaranteed?', 'No. Mobile service, the requested time and a free visit are subject to mechanic availability, your location and the nature of the repair. Our team will confirm your request on WhatsApp or by phone.'],
];
