import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'certificate',
    brokers: ['localhost:9092']
});

const topic = 'issue-certificate';
const consumer = kafka.consumer({ groupId: 'certificate-group' });

const producer = kafka.producer();

let counter = 0;

async function run() {

    await consumer.connect();
    await producer.connect();

    await consumer.subscribe({ topic });

    await consumer.run({
        eachMessage: async ({ topic, partitiion, message }) => {
            counter++;
            const prefix = `${topic}[${partitiion} | ${message}] / ${message.timestamp}`;
            console.log(`-${prefix} ${message.key}#${message.value}`);
            
            const  payload = JSON.parse(message.value);
            
            setTimeout(() => {
                producer.send({ 
                    topic: 'certification-response',
                    messages: [
                        {
                            value: `Certificado do usuário ${payload.user.name} do curso ${payload.course} gerado! #${counter}`
                        }
                    ]
                })
            }, 3000);
        }
    });
};

run().catch(console.error)
