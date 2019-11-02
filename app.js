/*document.querySelector(CSSセレクタ)でHTML要素を取得。
最初に合致したところでプログラムが終了するので複数とる場合はループor querySelectorAll() */
const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');

const createTodoList = task =>{
/*HTML テンプレート生成 */
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML+=html;
}

addTask.addEventListener('submit',e=>{
    /*デフォルトイベントを無効 */
    e.pereventDefault();
    /*タスクに入力した値を空白を除去して格納*/
    const task = addTask.add.value.trim();
    if(task.length){
        //todo listのhtmlを作成
        createTodoList(task);
        //タスクに入力した文字をクリア  
        addTask.reset();
    }
});