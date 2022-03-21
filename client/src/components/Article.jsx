import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    component: {
        marginBottom: 20,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%)'
    },
    container: {
        padding: 8,
        paddingBottom: '4px!important'
    },
    rightcontainer: {
        margin: '5px 0 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        color: '#44444d',
        fontWeight: 300,
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        fontSize: 12,
        color: '#808290',
        lineHeight: '22px'
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 10
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '&>*': {
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900,
        }
    }
}))
const Article = ({ article }) => {
    const classes = useStyles();

    return (
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.url} alt="image" className={classes.image} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightcontainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.author}><b>short</b> by {article.author}/ {new Date(article.timestamp).toDateString()}</Typography>
                        <Typography className={classes.description}>{article.description}</Typography>
                        <Typography className={classes.publisher}>read more at <a href={article.link} target="_blank">{article.publisher}</a></Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Article;