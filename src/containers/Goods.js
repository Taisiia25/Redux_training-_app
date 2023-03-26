import { useDispatch  } from "react-redux";
import { addGoods } from "../action";

const Goods = () => {

    const dispatch = useDispatch();

    const formHandler = (event) => {
        //для того щоб не  було перезавантаження сторінки
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        // dispatch (диспетчер стори) -  функція, яка приймає action, необхідний для виконання та данні
        dispatch(addGoods(data.id.value, data.title.value, data.image.value));
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type='text' name='id' defaultValue='28ss7ssd'/>
                </div>
                <div>
                    <input type='text' name='title' defaultValue='Lancome Hypnose Volume-a-Porter Mascara'/>
                </div>
                <div>
                    <input type='text' name='image' defaultValue='https://u.makeup.com.ua/h/hx/hxyafjrmxlyl.jpg'/>
                </div>
                <div>
                    <button type='submit'>Add new goods</button>
                </div>
            </form>
        </div>
    )

}

export  default Goods;