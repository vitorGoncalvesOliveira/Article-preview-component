import {computePosition , offset, arrow } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.5.4/+esm';

const MOBILE_WIDTH_FOOTER = 500;
window.onload = (e) => {

    const btnShowActiveFooter = document.getElementById('shared');
    

    
    btnShowActiveFooter.onclick = (e) => {
        
        const largura = window.screen.width;
        
        if(largura <= MOBILE_WIDTH_FOOTER ){
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
                const tooltip = document.getElementById('tooltip');
                const arrowElement = document.getElementById('arrow');

                computePosition(btnShowActiveFooter, tooltip, {
                    placement:'top',
                     middleware:[arrow({element:arrowElement}),offset(20)]
                }).then(({x, y, placement, middlewareData}) => {
                        
                        Object.assign(tooltip.style, {
                        left: `${x}px`,
                        top: `${y}px`,
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
                          right: '',
                          bottom: '',
                          [staticSide]: '-4px',
                        });
                 });

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
