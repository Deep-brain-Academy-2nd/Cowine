FROM python:3.8

RUN adduser --disabled-password python
USER python

COPY ./requirements.txt /tmp/requirements.txt

RUN pip install -r /tmp/requirements.txt

COPY ./ /var/www/recosys

COPY --chown=python:python ./ /var/www/recosys

WORKDIR /var/www/recosys

ENV PATH="/home/python/.local/bin:${PATH}"

EXPOSE 5000

CMD gunicorn --bind :5000 --workers 2 --threads 8 'src:create_app()'
