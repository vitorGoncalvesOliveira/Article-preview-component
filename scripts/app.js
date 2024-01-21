import {computePosition , offset, arrow , autoPlacement} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.5.4/+esm';
window.onload = (e) => {

    
    
    const btnShowActiveFooter = document.getElementById('shared');
    const tooltip = document.getElementById('tooltip');
    const arrowElement = document.getElementById('arrow');

    computePosition(btnShowActiveFooter, tooltip, {
        placement:'top',
         middleware:[arrow({element:arrowElement})]
    }).then(({x, y, placement, middlewareData}) => {
            
            Object.assign(tooltip.style, {
            left: `${x -90}px`,
            top: `${y -90}px`,
            });
            const {x: arrowX, y: arrowY} = middlewareData.arrow;
 
            const staticSide = {
              top: 'bottom',
              right: 'left',
              bottom: 'top',
              left: 'right',
            }[placement.split('-')[0]];
           
            Object.assign(arrowElement.style, {
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              right: '10px',
              bottom: '',
              [staticSide]: '-4px',
            });
     });
    
    btnShowActiveFooter.onclick = (e) => {
        
        const largura = window.screen.width;
        console.log(largura)
        if(largura <= 500 ){
        const actualFooter = document.getElementsByClassName("footer-mobile")[0];
        
        actualFooter.style.display = "none";
        actualFooter.style.transitions = "1s";

        const activeFooter = document.getElementsByClassName("footer-mobile-active")[0];
        activeFooter.style.display = "flex";
        
        }
        else {
            if(tooltip.style.display == 'flex'){
                tooltip.style.display = 'none'
            }else{
                tooltip.style.display = 'flex';
            }
            
            
        }

    }


    const btnShowDefaultFooter = document.getElementById('shared-active');
    btnShowDefaultFooter.onclick = (e) => {
        const activeFooter = document.getElementsByClassName("footer-mobile-active")[0];
        activeFooter.style.display = "none";

        const actualFooter = document.getElementsByClassName("footer-mobile")[0];
        
        actualFooter.style.display = "flex";
        actualFooter.style.transitions = "1s";

        

    }

}
