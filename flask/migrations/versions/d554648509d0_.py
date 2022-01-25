"""empty message

Revision ID: d554648509d0
Revises: 
Create Date: 2022-01-25 01:00:07.424241

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'd554648509d0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('rating',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.String(length=100), nullable=False),
    sa.Column('wineCode', sa.String(length=20), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('userId')
    )
    op.drop_table('Rating')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Rating',
    sa.Column('userId', mysql.CHAR(length=100), nullable=True),
    sa.Column('wineCode', mysql.CHAR(length=20), nullable=True),
    sa.Column('rating', mysql.VARCHAR(length=5), nullable=True),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.drop_table('rating')
    # ### end Alembic commands ###