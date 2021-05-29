/* const express = require('express');
const app = express();
app.use((request, response) => {
    response.send('<h1>Hello express</h1>');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.get('/page/:id', (request, response) => {
    const id = request.params.id;
    response.send(`<h1>${id} Page</h1>`);
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCD');
    response.set({
        'methodB1': 'FGHIJ',
        'methodB2': 'KLMON'
    });
    response.send('본문을 입력합니다.');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
app.get('/image', (request, response) => {
    fs.readFile('abc.jpg', (error, data) => {
        response.type('image/jpg');
        response.send(data);
    });
    
});

app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        response.type('audio/mpeg');
        response.send(data);
    });
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.status(404);
    response.send('없음');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.redirect('http://naver.com');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.get('*', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const app = express();
app.use(express.static('pub'));
app.get('*', (request, response) => {
    response.send(404);
    response.send("파일 없음");
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (request, response) => {
    
    response.send("명령 프롬포트 확인");
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* const express = require('express');
const morgan = require('morgan');
const bodyParser = require('bodyParser');

const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (request, response) => {
    let output = '';
    output += '<form method="post">';
    output += ' <input type="text" name="a" />';
    output += ' <input type="text" name="b" />';
    output += ' <input type="submit" />';
    output += '</form>';

    response.send(output);
});

app.post('/', (request, response) => {
    response.send(request.body);
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

