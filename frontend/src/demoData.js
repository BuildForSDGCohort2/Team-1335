const demoData = {
    User1: {
        id:1,
        name: 'Tamale Simon peter',
        dob: '1st.Oct.1987',
        phone: '0779813251',
        email: 'tamalesp@gmail.com',
        driverLicense: '',
        offenses: [
            {
                id:1,
                name:'over-speeding',
                details: 'Going over set speed limit of 30mph; he was going 6omph double the designated speed limit',
                imageUrl: '',
                fine: 150000,
                note: 'failure to pay will call for court hearing and revokation of drivers license for 2years'
            },
            {
                id:2,
                name: 'un-paid parking tickets',
                details: '2 years of unpaid parking ticks',
                imageUrl: '',
                fine: 200000,
                note:'failure to pay in specified time, will call for clamping the vehical'
            }
        ]
    },
    User2: {
        id:2,
        name: 'Nsita Rachel',
        dob: '10th.Oct.1990',
        phone: '0779813251',
        email: 'nsitar13@gmail.com',
        driverLicense: '',
        offenses: [
            {
                id:1,
                name:'over-speeding',
                details: 'Going over set speed limit of 30mph; he was going 6omph double the designated speed limit',
                imageUrl: '',
                fine: 150000,
                note: 'failure to pay will call for court hearing and revokation of drivers license for 2years'
            },
            {
                id:2,
                name: 'un-paid parking tickets',
                details: '2 years of unpaid parking ticks',
                imageUrl: '',
                fine: 200000,
                note:'failure to pay in specified time, will call for clamping the vehical'
            }
        ]
    }
};

export default demoData;