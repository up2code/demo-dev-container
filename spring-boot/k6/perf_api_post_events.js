import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // Number of virtual users (simulated users)
    duration: '30s', // Test duration
};

export default function () {
    const payload = {
        eventSource: 'Source' + Math.floor(Math.random() * 1000),
        name: 'EventName' + Math.floor(Math.random() * 1000),
        data: 'EventData' + Math.floor(Math.random() * 1000),
    };

    const url = 'http://localhost:8080/events'; // Update with your API endpoint

    let response = http.post(url, JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    check(response, {
        'Insertion was successful': (r) => r.status === 200,
    });

    // sleep(1); // Add a delay between requests (in seconds)
}
