import './styles/anotherStyles.scss';

export default class Person{
    sayHello = ({abc}) => {
        const a = {
            ...abc,
            another: 'hi'
        };
        console.log('hello');
        console.log(a);
    }
}
